package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Blikehist {
	
	@Id
	@GeneratedValue
	long fid;
	long blogid;
	long authid;
	String bview;
	public long getFid() {
		return fid;
	}
	public void setFid(long fid) {
		this.fid = fid;
	}
	public long getBlogid() {
		return blogid;
	}
	public void setBlogid(long blogid) {
		this.blogid = blogid;
	}
	public long getAuthid() {
		return authid;
	}
	public void setAuthid(long authid) {
		this.authid = authid;
	}
	public String getBview() {
		return bview;
	}
	public void setBview(String bview) {
		this.bview = bview;
	}
	
	
	
}
