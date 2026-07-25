package com.example.ormlearn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ormlearn.entity.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {

}

