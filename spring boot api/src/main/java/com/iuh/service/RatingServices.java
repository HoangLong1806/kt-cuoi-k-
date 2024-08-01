package com.iuh.service;

import java.util.List;

import com.iuh.exception.ProductException;
import com.iuh.modal.Rating;
import com.iuh.modal.User;
import com.iuh.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
