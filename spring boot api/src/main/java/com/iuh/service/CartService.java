package com.iuh.service;

import com.iuh.exception.ProductException;
import com.iuh.modal.Cart;
import com.iuh.modal.CartItem;
import com.iuh.modal.User;
import com.iuh.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
