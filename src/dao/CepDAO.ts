import { FilterQuery } from 'mongoose';
import { Cep, CepModel } from './../domains/CepModel';

// Adicionando esse comentário só para subir de novo
export class CepDAO {
  async save(cep: Cep) {
    const savedCep = await CepModel.create(cep);
    return savedCep;
  }

  async findByCep(cepString: string) {
    const cepObject = await CepModel.find<Cep>({ cep: cepString });
    return cepObject.at(0);
  }
  
  async findByLogradouro(logradouro: string) {
    const cepObject = await CepModel.find<Cep>({
      logradouro: {
        $regex: logradouro,
        $options: 'i'
      }
    });
    
    return cepObject.at(0);
  }

  async delete(filter?: FilterQuery<Cep>) {
    const response = await CepModel.deleteMany(filter);
    return response.acknowledged;
  }
}