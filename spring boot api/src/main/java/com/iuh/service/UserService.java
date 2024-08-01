package com.iuh.service;

import java.util.List;

import com.iuh.exception.UserException;
import com.iuh.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
