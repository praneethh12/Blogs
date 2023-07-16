package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Model {
	
	@Id
	@GeneratedValue
	public long auth_id;
	
	public long profile_views;
	public long blogs;
	public long likes;
	public long blog_views;
	public String blogview;
	public long travel,food,auto;
	public String bloglike;
	public long getAuth_id() {
		return auth_id;
	}
	public void setAuth_id(long auth_id) {
		this.auth_id = auth_id;
	}
	public long getProfile_views() {
		return profile_views;
	}
	public void setProfile_views(long profile_views) {
		this.profile_views = profile_views;
	}
	public long getBlogs() {
		return blogs;
	}
	public void setBlogs(long blogs) {
		this.blogs = blogs;
	}
	public long getLikes() {
		return likes;
	}
	public void setLikes(long likes) {
		this.likes = likes;
	}
	public long getBlog_views() {
		return blog_views;
	}
	public void setBlog_views(long blog_views) {
		this.blog_views = blog_views;
	}
	public String getBlogview() {
		return blogview;
	}
	public void setBlogview(String blogview) {
		this.blogview = blogview;
	}
	public long getTravel() {
		return travel;
	}
	public void setTravel(long travel) {
		this.travel = travel;
	}
	public long getFood() {
		return food;
	}
	public void setFood(long food) {
		this.food = food;
	}
	public long getAuto() {
		return auto;
	}
	public void setAuto(long auto) {
		this.auto = auto;
	}
	public String getBloglike() {
		return bloglike;
	}
	public void setBloglike(String bloglike) {
		this.bloglike = bloglike;
	}
	
	
	
	

}
