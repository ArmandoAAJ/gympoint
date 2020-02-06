import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validação Falhou',
      });
    }

    const planExist = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExist) {
      return res.status(400).json({ error: 'Plano já cadastrado' });
    }

    const {title, duration, price} = req.body
    const totals = (price * duration)

    const plan = await Plan.create({
      title, 
      duration, 
      price, 
      totals
    });

    return res.json(plan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Validação Falhou',
      });
    }

    const { id } = req.params;

    const plans = await Plan.findByPk(id);
    if (!plans) {
      return res.status(400).json({ error: 'Plano não encontrado' });
    }

    if (req.body.title !== plans.title && req.body.title !== undefined) {
      const plansExist = await Plan.findOne({
        where: { title: req.body.title },
      });

      if (plansExist) {
        return res
          .status(400)
          .json({ error: 'Plano com o mesmo nome cadastrado' });
      }
    }

    const { title, duration, price } = await plans.update(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async index(req, res) {
    try {
      const plan = await Plan.findAll()

      return res.json(plan)

    } catch (error) {

      return res.status(400).json({ error: 'Erro na chamada' });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params

      const { title, duration, price } = await Plan.findByPk(id)

      const finalPrice = (duration * price)

      return res.json({
        title,
        duration,
        price,
        finalPrice
      })

    } catch (error) {

      return res.status(400).json({ error: 'Erro na chamada' });
    }
  }

  async delete(req, res) {

    const { id } = req.params

    const plans = await Plan.findByPk(id)

    if (!plans) {
      return res.status(400).json({
        error: 'Estudante não encontrado',
      })
    }

    await plans.destroy()

    return res.json({
      plans
    })
  }

}

export default new PlanController();
