package com.store.service.Imp;

import com.store.dto.ProductDto;
import com.store.entity.Product;
import com.store.repository.ProductRepository;
import com.store.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImp implements IProductService {
    private final ProductRepository productRepository;



    @Override
    public List<ProductDto> getProducts() {
        return productRepository.findAll()
                .stream()
                .map(this::transferToDTO)
                .collect(Collectors.toList());
    }

    private ProductDto transferToDTO (Product product){

        ProductDto productdto = new ProductDto();
        BeanUtils.copyProperties(product, productdto);
        return productdto;


    }
}
