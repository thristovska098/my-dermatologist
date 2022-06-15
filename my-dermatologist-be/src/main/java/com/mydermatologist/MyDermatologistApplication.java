package com.mydermatologist;

import com.stripe.Stripe;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MyDermatologistApplication {

	public static void main(String[] args) {

		SpringApplication.run(MyDermatologistApplication.class, args);

		Stripe.apiKey = "sk_test_51Kx6CwK3oLDScpUF2jNqahnFTry4NYBwghVuf2lKL13DgD9ZKVjHVCiLP2aoamfklXk7OydB8v2KTPcSF1N2QYfe00XVRuvAVj";
	}

}
