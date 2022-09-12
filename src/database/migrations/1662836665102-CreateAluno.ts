import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAluno1662836665102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "aluno",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "endereco",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "dataNascimento",
                        type: "date",
                    },
                    {
                        name: "altura",
                        type: "float",
                    },
                    {
                        name: "peso",
                        type: "int",
                    },
                    {
                        name: "turma_id",
                        type: "int",
                    },
                    {
                        name: "matricula_id",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "NOW()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKTurma",    
                        columnNames:["turma_id"],
                        referencedTableName: "turma",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKMatricula",    
                        columnNames:["matricula_id"],
                        referencedTableName: "matricula",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("aluno");
    }

}
