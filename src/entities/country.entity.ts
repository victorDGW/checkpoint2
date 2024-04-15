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
  @Column({ length: 2 })
  @Length(5, 50, { message: 'Le titre doit contenir entre 5 et 50 caractères' })
  name!: string

  @Field()
  @Column({ length: 3, nullable: true })
  @Length(0, 3, { message: 'Le titre doit contenir entre 5 et 50 caractères' })
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
