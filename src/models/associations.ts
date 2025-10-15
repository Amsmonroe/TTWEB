import { Psicologo } from './psicologo';
import { Paciente } from './paciente';

// Relación Psicologo -> Paciente (uno a muchos)
Psicologo.hasMany(Paciente, {
  foreignKey: 'id_psicologo',
  sourceKey: 'id_psicologo'
});

Paciente.belongsTo(Psicologo, {
  foreignKey: 'id_psicologo',
  targetKey: 'id_psicologo'
});