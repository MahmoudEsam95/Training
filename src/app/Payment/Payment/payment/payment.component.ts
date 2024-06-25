import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PayPalService } from 'src/app/Service/PayPal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './Payment.component.html',
  styleUrls: ['./Payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount = 0;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(private router: Router, private payment: PayPalService) { }

  ngOnInit(): void {
    this.amount = this.payment.totalAmount;

    const paypalWindow: any = window;

    if (paypalWindow.paypal) {
      paypalWindow.paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: this.amount.toString()
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          console.log('Transaction approved');
          this.router.navigate(['/success']);
        },
        onError: (err: any) => {
          console.error('PayPal payment error:', err);
        }
      }).render(this.paymentRef.nativeElement);
    } else {
      console.error('PayPal SDK not loaded');
    }
  }
}
