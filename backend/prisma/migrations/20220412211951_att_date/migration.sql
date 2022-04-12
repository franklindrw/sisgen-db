/*
  Warnings:

  - Added the required column `DT_TRANSACAO` to the `transacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transacoes` ADD COLUMN `DT_TRANSACAO` DATETIME NOT NULL;
