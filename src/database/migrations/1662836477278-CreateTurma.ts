import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTurma1662836477278 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "turma",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "horario",
                        type: "timestamp",
                        default: "NOW()"
                    },
                    {
                        name: "duracao",
                        type: "timestamp",
                        default: "NOW()"
                    },
                    {
                        name: "atividade_id",
                        type: "int",
                    },
                    {
                        name: "instrutor_id",
                        type: "int",
                    },                    {
                        name: "datainicio",
                        type: "timestamp",
                        default: "NOW()"
                    },
                    {
                        name: "datafim",
                        type: "timestamp",
                        default: "NOW()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKAtividade",    
                        columnNames:["atividade_id"],
                        referencedTableName: "atividade",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKInstrutor",    
                        columnNames:["instrutor_id"],
                        referencedTableName: "instrutor",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("turma");
    }

}
