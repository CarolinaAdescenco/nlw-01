import Knex from "knex"

export async function up(knex: Knex) {
    // Criar tabela
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}
export async function down(knex: Knex) {
    // Deletar tabela - sempre faz um rollback do método up
    return knex.schema.dropSchema('items')
}