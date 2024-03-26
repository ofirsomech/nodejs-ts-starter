import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Example {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name?: string;

    @Column()
    description?: string;

    @CreateDateColumn({ type: 'datetime2' })
    createdAt?: Date;

    @UpdateDateColumn({ type: 'datetime2', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt?: Date;

    @DeleteDateColumn({ type: 'datetime2', nullable: true })
    deletedAt?: Date;
}