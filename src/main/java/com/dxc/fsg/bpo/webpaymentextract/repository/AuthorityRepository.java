package com.dxc.fsg.bpo.webpaymentextract.repository;

import com.dxc.fsg.bpo.webpaymentextract.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
