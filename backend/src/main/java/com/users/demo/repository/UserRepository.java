package com.users.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.users.demo.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
