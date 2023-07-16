package com.example.demo.Model;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Authlogin {
	
	@Id
	String email;
	String pass;
	
	
	//@GeneratedValue(strategy=GenerationType.IDENTITY, generator="CUST_SEQ")
	long authid;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public long getAuthid() {
		return authid;
	}
	public void setAuthid(long authid) {
		this.authid = authid;
	}
	
	

}
