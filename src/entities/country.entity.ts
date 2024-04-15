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
  @Column({ length: 50, unique: true })
  @Length(2, 50, { message: 'Le nom  doit contenir entre 2 et 50 caractères' })
  name!: string

  @Field()
  @Column({ length: 3, nullable: true })
  @Length(2, 3, { message: 'Le code doit contenir entre 2 et 3 caractères' })
  code!: string

  @Field()
  @Column({ length: 10, nullable: true })
  emoji!: string

  @Field({ nullable: true })
  @Column({ length: 255, nullable: true })
  continentCode!: string
}

@InputType()
export class CountryCreateInput {
  @Field()
  name: string

  @Field()
  code: string

  @Field({ nullable: true })
  emoji: string

  @Field({ nullable: true })
  continentCode: string
}
