package com.iuh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iuh.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
