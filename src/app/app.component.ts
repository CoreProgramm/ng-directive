import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: any[] = [
    {
        cust_code: 'cust001', cust_name: 'John Smith', Cust_address: 'USA',
        Cust_phone: '6737540477', Cust_email: 'john.smith@outlook.com', Cust_gender: 'Male'
    },
    {
      cust_code: 'cust002', cust_name: 'Lori Orona', Cust_address: 'USA',
      Cust_phone: '6729837538', Cust_email: 'lori.orona@gmail.com', Cust_gender: 'Female'
    },
    {
      cust_code: 'cust003', cust_name: 'Steve Oman', Cust_address: 'UK',
      Cust_phone: '4252573576', Cust_email: 'steve333@yahoo.com', Cust_gender: 'Male'
    },
    {
      cust_code: 'cust004', cust_name: 'Kadir Khan', Cust_address: 'UAE',
      Cust_phone: '2367569086', Cust_email: 'kadir.khan@outlook.com', Cust_gender: 'Male'
    },
    {
      cust_code: 'cust005', cust_name: 'Sima Biswas', Cust_address: 'India',
      Cust_phone: '9725769872', Cust_email: 'sima.biswas@gmail.com', Cust_gender: 'Female'
    },
    {
      cust_code: 'cust006', cust_name: 'Sabina rose', Cust_address: 'Saudi Arbia',
      Cust_phone: '5363573578', Cust_email: 'sabina.rose@hotmail.com', Cust_gender: 'Female'
    }
  ];
}
