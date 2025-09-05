package com.store.dto;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDto {
    private String name;
    private String email;
    private String mobileNumber;
    private String message;
}
