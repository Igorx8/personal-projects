import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { validate } from 'class-validator';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) { }

  async create(createCustomerDto: CreateCustomerDto) {
    await validate(createCustomerDto).then(errors => {
      if (errors.length > 0) {
        return 'validação não passou, erros: ' + errors;
      }
      else {
        console.log('validação concluída');
        this.customerRepository.save(createCustomerDto)
        return 'Cliente salvo com sucesso'
      }
    })
  }

  findAll() {
    return this.customerRepository.find()
  }

  findOne(id: number) {
    return this.customerRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await validate(updateCustomerDto).then(async errors => {
      if (errors.length > 0) {
        return 'Validação não passou'
      }
      else {
        console.log('validação concluída');
        const customer = await this.customerRepository.preload({
          id: +id,
          ...updateCustomerDto
        })

        if (!customer) throw new NotFoundException(`Cliente id: ${id} não encontrado`)
        else return this.customerRepository.save(customer)
      }
    })
  }

  async remove(id: number) {
    let customer = await this.customerRepository.findOne({ where: { id } })

    if (!customer) {
      throw new NotFoundException(`Cliente id: ${id} não encontrado`)
    }
    else return this.customerRepository.delete(customer)
  }
}
