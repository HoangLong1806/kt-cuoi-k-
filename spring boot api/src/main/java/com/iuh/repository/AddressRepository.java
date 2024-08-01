package com.iuh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iuh.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
