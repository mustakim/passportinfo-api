import * as DataTypes from 'sequelize';
import { mysqlConnect } from '../../libs';

export const Passport = mysqlConnect.define(
	'passports',
	{
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		inspector_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		father_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		mother_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		spouse_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		permanent_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		contact_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},

		emergency_contact_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		emergency_contact_relationship: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		emergency_contact_address: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		emergency_contact_telephone_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		client_image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		passport_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		country_code: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		passport_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		surname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		given_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nationality: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		personal_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		date_of_birth: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		previous_passport_no: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		sex: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		place_of_birth: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		date_of_issue: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		issuing_authority: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		date_of_expiry: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		signature_image: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	},
	{
		tableName: 'passports',
		timestamps: true,
		underscored: true,
		paranoid: true,

		defaultScope: {
			where: { deleted_at: null }
		},
		scopes: {
			withAll: { attributes: {} },
			withoutDeleted: { where: { deleted_at: null } },
			withDeleted: {
				attributes: {}
			}
		}
	}
);
