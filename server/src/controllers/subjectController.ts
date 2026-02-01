import { Request, Response } from 'express';
import { Subject } from '../models';

export const getSubjectsByCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId } = req.params;
    const subjects = await Subject.findAll({
      where: { courseId, isActive: true },
      order: [['semester', 'ASC'], ['name', 'ASC']],
    });
    res.json({ subjects });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ message: 'Error fetching subjects' });
  }
};

export const getSubjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const subject = await Subject.findByPk(id);

    if (!subject) {
      res.status(404).json({ message: 'Subject not found' });
      return;
    }

    res.json({ subject });
  } catch (error) {
    console.error('Error fetching subject:', error);
    res.status(500).json({ message: 'Error fetching subject' });
  }
};

export const createSubject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId } = req.params;
    const { name, code, semester, credits, description } = req.body;
    
    const subject = await Subject.create({
      courseId: parseInt(courseId),
      name,
      code,
      semester,
      credits,
      description
    });
    
    res.status(201).json({ subject });
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({ message: 'Error creating subject' });
  }
};
