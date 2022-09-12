import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateChamada1662841506563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "chamada",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "data",
                        type: "date",
                    },
                    {
                        name: "presente",
                        type: "boolean",
                    },
                    {
                        name: "matricula_id",
                        type: "int",
                    },
                    {
                        name: "turma_id",
                        type: "int",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKmatricula",    
                        columnNames:["matricula_id"],
                        referencedTableName: "matricula",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKTurma",    
                        columnNames:["turma_id"],
                        referencedTableName: "turma",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("telefone");
    }

}
