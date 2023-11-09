package com.zosh.dto;

import java.util.ArrayList;
import java.util.List;

import com.zosh.model.Twit;
import com.zosh.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ComDto {

	private Long id;
	
	private UserDto user;
	
	private List<Twit> comTwits = new ArrayList<>();
	
	private String comName;
	
	private String description;
	
	private String backgroundImage;
	
	private boolean privateMode;
	
	private List<User> followingsc = new ArrayList<>();
	
	private List<User> followingscReady = new ArrayList<>();
}