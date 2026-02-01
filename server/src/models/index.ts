import User from './User';
import Institution from './Institution';
import Course from './Course';
import Subject from './Subject';
import Material from './Material';

// Define associations

// Institution -> Courses (One-to-Many)
Institution.hasMany(Course, {
  foreignKey: 'institutionId',
  as: 'courses',
});
Course.belongsTo(Institution, {
  foreignKey: 'institutionId',
  as: 'institution',
});

// Course -> Subjects (One-to-Many)
Course.hasMany(Subject, {
  foreignKey: 'courseId',
  as: 'subjects',
});
Subject.belongsTo(Course, {
  foreignKey: 'courseId',
  as: 'course',
});

// Subject -> Materials (One-to-Many)
Subject.hasMany(Material, {
  foreignKey: 'subjectId',
  as: 'materials',
});
Material.belongsTo(Subject, {
  foreignKey: 'subjectId',
  as: 'subject',
});

// User -> Materials (One-to-Many) - uploaded by
User.hasMany(Material, {
  foreignKey: 'uploadedById',
  as: 'uploadedMaterials',
});
Material.belongsTo(User, {
  foreignKey: 'uploadedById',
  as: 'uploadedBy',
});

export {
  User,
  Institution,
  Course,
  Subject,
  Material,
};
