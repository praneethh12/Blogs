package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AuthBlogs;
import com.example.demo.Repo.AuthBlogsRepo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthBlogsCont {
	
	@Autowired
	private AuthBlogsRepo myrepo;
	
	@GetMapping("/getAllBlogs")
	public List<AuthBlogs> getAllBlogs()
	{
		System.out.println("Getting all blogs");
		return myrepo.findAll();
	}
	@GetMapping("/getBlogbyid/{blogid}")
	public AuthBlogs getBlogbyid(@PathVariable int blogid)
	{
		return myrepo.findById(blogid).orElse(null);
	}
	
	@PostMapping("/postBlogs")
	public void postBlog(@RequestBody AuthBlogs auth1)
	{
		//auth1.setBlogid(auth1.getBlogid()-95);
		System.out.println("Saving blog for blog" + auth1.getAuthid());
		myrepo.save(auth1);
		
	}
	

}
