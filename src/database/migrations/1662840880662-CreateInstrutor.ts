import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInstrutor1662840880662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "instrutor",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "rg",
                        type: "int"
                    },
                    {
                        name: "nome",
                        type: "int"
                    },
                    {
                        name: "nascimento",
                        type: "date"
                    },
                    {
                        name: "titulacao",
                        type: "int"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("instrutor");

    }

}
