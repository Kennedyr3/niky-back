import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTelefone1662841065686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "telefone",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "numero",
                        type: "int"
                    },
                    {
                        name: "tipo",
                        type: "varchar"
                    },
                    {
                        name: "instrutor_id",
                        type: "int"
                    },
                ] ,
                foreignKeys: [
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
        await queryRunner.dropTable("telefone");
    }

}
