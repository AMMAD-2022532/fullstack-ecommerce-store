package com.store.controller;

import com.store.dto.ProductDto;
import com.store.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/products")
@RequiredArgsConstructor
public class ProductController {

     private final IProductService iProductService;
     @GetMapping
     public List<ProductDto> getProduct(){
         List<ProductDto> Productlist = iProductService.getProducts();
         return Productlist;

     }





}
