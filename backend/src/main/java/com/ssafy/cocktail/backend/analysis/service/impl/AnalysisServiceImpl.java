package com.ssafy.cocktail.backend.analysis.service.impl;

import com.ssafy.cocktail.backend.analysis.dto.WordCloudDetail;

import com.ssafy.cocktail.backend.analysis.service.AnalysisService;
import com.ssafy.cocktail.backend.domain.entity.WordCloud;
import com.ssafy.cocktail.backend.domain.repository.WordCloudRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AnalysisServiceImpl implements AnalysisService {

    private WordCloudRepository wordCloudRepository;
    @Override
    public ArrayList<WordCloudDetail> getWordCloudData() {
        // 워드클라우드에 사용할 데이터 50개
        ArrayList<WordCloudDetail> results = new ArrayList<>();

        List<WordCloud> wordClouds = wordCloudRepository.findAll(); // 사용 개수로 정렬하여 50개 가져오기
        for (WordCloud wordCloud: wordClouds) {
            WordCloudDetail wordCloudDetail = new WordCloudDetail();
            wordCloudDetail.setText(wordCloud.getWcIngredientNameKo()); // 재료 이름
            wordCloudDetail.setValue(wordCloud.getWcCnt()); // 재료 개수
            results.add(wordCloudDetail);
        }

        return results;
    }
}
