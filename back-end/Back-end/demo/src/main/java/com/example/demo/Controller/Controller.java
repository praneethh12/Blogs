package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Model;
import com.example.demo.Repo.Repo;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Controller {
	
	@Autowired
	private Repo myrepo;
	
	@PostMapping("/insertBlog")
	public void postBlogs(@RequestBody Model model1)
	{
		System.out.println("Posted here");
		myrepo.save(model1);
		
	}
	
	@GetMapping("/getBlog")
	public List<Model> getBlogs()
	{
		System.out.println("Came here");
		return myrepo.findAll();
	}
	@GetMapping("/getBlog/{authid}")
	public Optional<Model> getBlogsbyId(@PathVariable long authid)
	{
		System.out.println("Came here :" + authid);
		Model temp = myrepo.findById(authid).orElse(null);
		if(temp==null)
		{
			System.out.println("Error");
			return null;
		}
		temp.setProfile_views(temp.getProfile_views()+1);
		myrepo.save(temp);
		return myrepo.findById(authid);
	}
	@PutMapping("/saveBlogs/{authid}")
	public void saveBlogs( @RequestParam Model model1,@PathVariable long authid)
	{
		System.out.println(model1.getProfile_views());
		System.out.println("Updating value");
		Model temp = myrepo.findById(authid).orElse(null);
		if(temp==null)
		{
			System.out.println("Author does not exist");
			return;
		}
		
		temp.setProfile_views(model1.getProfile_views());
		myrepo.save(temp);
			
	}

}
