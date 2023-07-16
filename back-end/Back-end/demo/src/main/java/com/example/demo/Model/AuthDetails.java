package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthDetails {
	
	@Id
	@GeneratedValue
	private long Authid;
	
	private String name;
	private String bio;
	
	@Lob
	@Column(length=50000000)
	private byte[] authpic;

	public long getAuthid() {
		return Authid;
	}

	public void setAuthid(long authid) {
		Authid = authid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public byte[] getAuthpic() {
		return authpic;
	}

	public void setAuthpic(byte[] authpic) {
		this.authpic = authpic;
	}
	
	

}
