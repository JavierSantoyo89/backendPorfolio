use backendportfolio;
Select * from tblclient as client, tblproduct as product, tblfactura as factura, tblprocess, tblemployee as employee
where client.idclient = factura.idclient and factura.idProduct = product.idProduct and product.idProcess = tblprocess.idProcess
order by client.idclient;

select * from  tblprocess, tblproduct as product
where product.idProcess = tblprocess.idProcess
order by tblproduct.idProduct;

select * from tblemployee;

INSERT INTO `backendportfolio`.`tblemployee` (`userName`, `userType`) VALUES ('Oscar Rios', 'Tecnico');
INSERT INTO `backendportfolio`.`tblemployee` (`userName`, `userType`) VALUES ('Eduardo Rios', 'Tecnico');
INSERT INTO `backendportfolio`.`tblemployee` (`userName`, `userType`) VALUES ('Luis rios', 'Owner');
