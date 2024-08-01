package com.iuh.service;

import java.util.List;

import com.iuh.exception.ProductException;
import com.iuh.modal.Review;
import com.iuh.modal.User;
import com.iuh.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
