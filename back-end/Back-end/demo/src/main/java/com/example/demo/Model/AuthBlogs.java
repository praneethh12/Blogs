package com.example.demo.Model;

import org.springframework.boot.autoconfigure.web.WebProperties.Resources.Chain.Strategy;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AuthBlogs {
	
	@Id
	@GeneratedValue
	private int fid;
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	
	
	private int Blogid;
	private String title;
	private String message;
	private String type;
	private String path;
	private String Authid;
	public int getBlogid() {
		return Blogid;
	}
	public String getAuthid() {
		return Authid;
	}
	public void setAuthid(String authid) {
		Authid = authid;
	}
	public void setBlogid(int blogid) {
		Blogid = blogid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	
}
