package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class AuthPic {
	
	@Id
	private Long authid;
	@Lob
	@Column(length=512)
	private String path;
	private String authname;
	public Long getAuthid() {
		return authid;
	}
	public void setAuthid(Long authid) {
		this.authid = authid;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public String getAuthname() {
		return authname;
	}
	public void setAuthname(String authname) {
		this.authname = authname;
	}
	
	
	

}
