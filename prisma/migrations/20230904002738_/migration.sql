-- CreateTable
CREATE TABLE `tblclient` (
    `id_client` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(191) NOT NULL,
    `RFC` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `cp` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `telCel` VARCHAR(191) NOT NULL,
    `fiscalMode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblemployee` (
    `id_employee` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `user_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_employee`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblfactura` (
    `id_factura` INTEGER NOT NULL AUTO_INCREMENT,
    `folio` VARCHAR(191) NOT NULL,
    `no_orden_compra` VARCHAR(191) NOT NULL,
    `emition_date` DATETIME(3) NOT NULL,
    `dateIn` DATETIME(3) NOT NULL,
    `dateOut` DATETIME(3) NOT NULL,
    `idClient` INTEGER NOT NULL,
    `id_product` INTEGER NOT NULL,
    `qtyFinish` INTEGER NOT NULL,

    PRIMARY KEY (`id_factura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblhistoryprocess` (
    `id_history_process` INTEGER NOT NULL AUTO_INCREMENT,
    `name_history_process` VARCHAR(191) NOT NULL,
    `qty` INTEGER NOT NULL,
    `date_history_process` DATETIME(3) NOT NULL,
    `id_user` INTEGER NOT NULL,

    PRIMARY KEY (`id_history_process`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblprocess` (
    `id_process` INTEGER NOT NULL AUTO_INCREMENT,
    `name_process` VARCHAR(191) NOT NULL,
    `id_history_process` INTEGER NOT NULL,

    PRIMARY KEY (`id_process`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tblproduct` (
    `id_product` INTEGER NOT NULL AUTO_INCREMENT,
    `name_product` VARCHAR(191) NOT NULL,
    `id_process` INTEGER NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `priceUnit` INTEGER NOT NULL,

    PRIMARY KEY (`id_product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
