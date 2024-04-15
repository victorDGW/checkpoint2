import { Length } from 'class-validator'
import { Field, Float, ID, InputType, ObjectType } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ length: 2, unique: true })
  @Length(2, 50, { message: 'Le nom  doit contenir entre 5 et 50 caractères' })
  name!: string

  @Field()
  @Column({ length: 2, nullable: true })
  @Length(0, 2, { message: 'Le code doit contenir entre 2 et 3 caractères' })
  code!: string

  @Field()
  @Column({ length: 10, nullable: true })
  emoji!: string
}

@InputType()
export class CountryCreateInput {
  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  code: string

  @Field({ nullable: true })
  emoji: string
}
