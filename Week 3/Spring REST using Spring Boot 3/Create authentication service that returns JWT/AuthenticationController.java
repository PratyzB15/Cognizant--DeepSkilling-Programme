package com.cognizant.springlearn.controller;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.JwtResponse;
import com.cognizant.springlearn.security.JwtTokenUtil;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<JwtResponse> authenticate(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {

        String user = getUser(authHeader);

        String token = jwtTokenUtil.generateToken(user);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    private String getUser(String authHeader) {

        String encodedCredentials = authHeader.substring(6);

        byte[] decodedBytes =
                Base64.getDecoder().decode(encodedCredentials);

        String credentials =
                new String(decodedBytes);

        return credentials.split(":")[0];
    }

}