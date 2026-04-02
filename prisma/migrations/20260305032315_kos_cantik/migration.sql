/*
  Warnings:

  - You are about to drop the column `createdAt` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `kosId` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `book` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `book` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(2))`.
  - You are about to drop the column `createdAt` on the `kos` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `kos` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `kos` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerMonth` on the `kos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `kos` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `kos` table. All the data in the column will be lost.
  - You are about to drop the column `facilityId` on the `kosfacility` table. All the data in the column will be lost.
  - You are about to drop the column `kosId` on the `kosfacility` table. All the data in the column will be lost.
  - You are about to drop the column `kosId` on the `kosimage` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `kosId` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `ownerReply` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `facility` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `end_date` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kos_id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_per_month` to the `Kos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Kos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `facility` to the `KosFacility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kos_id` to the `KosFacility` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kos_id` to the `KosImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kos_id` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_kosId_fkey`;

-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_userId_fkey`;

-- DropForeignKey
ALTER TABLE `kos` DROP FOREIGN KEY `Kos_userId_fkey`;

-- DropForeignKey
ALTER TABLE `kosfacility` DROP FOREIGN KEY `KosFacility_facilityId_fkey`;

-- DropForeignKey
ALTER TABLE `kosfacility` DROP FOREIGN KEY `KosFacility_kosId_fkey`;

-- DropForeignKey
ALTER TABLE `kosimage` DROP FOREIGN KEY `KosImage_kosId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_kosId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_userId_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `createdAt`,
    DROP COLUMN `endDate`,
    DROP COLUMN `kosId`,
    DROP COLUMN `startDate`,
    DROP COLUMN `totalPrice`,
    DROP COLUMN `userId`,
    ADD COLUMN `end_date` DATETIME(3) NOT NULL,
    ADD COLUMN `kos_id` INTEGER NOT NULL,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    MODIFY `status` ENUM('pending', 'accept', 'reject') NOT NULL;

-- AlterTable
ALTER TABLE `kos` DROP COLUMN `createdAt`,
    DROP COLUMN `description`,
    DROP COLUMN `isAvailable`,
    DROP COLUMN `pricePerMonth`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `price_per_month` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `kosfacility` DROP COLUMN `facilityId`,
    DROP COLUMN `kosId`,
    ADD COLUMN `facility` VARCHAR(191) NOT NULL,
    ADD COLUMN `kos_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `kosimage` DROP COLUMN `kosId`,
    ADD COLUMN `kos_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `createdAt`,
    DROP COLUMN `kosId`,
    DROP COLUMN `ownerReply`,
    DROP COLUMN `rating`,
    DROP COLUMN `userId`,
    ADD COLUMN `kos_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- DropTable
DROP TABLE `facility`;

-- AddForeignKey
ALTER TABLE `Kos` ADD CONSTRAINT `Kos_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KosImage` ADD CONSTRAINT `KosImage_kos_id_fkey` FOREIGN KEY (`kos_id`) REFERENCES `Kos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KosFacility` ADD CONSTRAINT `KosFacility_kos_id_fkey` FOREIGN KEY (`kos_id`) REFERENCES `Kos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_kos_id_fkey` FOREIGN KEY (`kos_id`) REFERENCES `Kos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_kos_id_fkey` FOREIGN KEY (`kos_id`) REFERENCES `Kos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
