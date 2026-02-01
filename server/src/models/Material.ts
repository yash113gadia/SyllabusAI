import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface MaterialAttributes {
  id: number;
  subjectId: number;
  uploadedById: number;
  title: string;
  description?: string;
  fileType: 'pdf' | 'ppt' | 'pptx' | 'doc' | 'docx';
  fileUrl: string;
  fileSize: number;
  originalFileName: string;
  viewCount: number;
  downloadCount: number;
  summary?: string;
  summaryStatus: 'pending' | 'processing' | 'completed' | 'failed';
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MaterialCreationAttributes extends Optional<MaterialAttributes, 'id' | 'description' | 'viewCount' | 'downloadCount' | 'summary' | 'summaryStatus' | 'isActive'> {}

class Material extends Model<MaterialAttributes, MaterialCreationAttributes> implements MaterialAttributes {
  public id!: number;
  public subjectId!: number;
  public uploadedById!: number;
  public title!: string;
  public description?: string;
  public fileType!: 'pdf' | 'ppt' | 'pptx' | 'doc' | 'docx';
  public fileUrl!: string;
  public fileSize!: number;
  public originalFileName!: string;
  public viewCount!: number;
  public downloadCount!: number;
  public summary?: string;
  public summaryStatus!: 'pending' | 'processing' | 'completed' | 'failed';
  public isActive!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Material.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subjects',
        key: 'id',
      },
    },
    uploadedById: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fileType: {
      type: DataTypes.ENUM('pdf', 'ppt', 'pptx', 'doc', 'docx'),
      allowNull: false,
    },
    fileUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    originalFileName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    downloadCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    summaryStatus: {
      type: DataTypes.ENUM('pending', 'processing', 'completed', 'failed'),
      defaultValue: 'pending',
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'materials',
  }
);

export default Material;
