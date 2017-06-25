import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { UTILS_STORAGE_PROVIDERS } from './utils-service/utils.service';
import { ARTICLE_STORAGE_PROVIDERS } from './article-service/article.service';
/**
 * 数据缓存）
 */
import { StorageModule } from './storage';
/**
 * 认证
 */
import { AuthorizationModule } from './authorization';
import { LoadingModule } from './loading';
/**
 * 包装http
 */
import { AjaxModule } from './ajax';

/**
 * 滚动加载
 */
import { InfinitescrollModule } from './infinitescroll'

@NgModule({
  imports: [
    HttpModule,
    LoadingModule,
    AjaxModule,
    StorageModule,
    AuthorizationModule,
    InfinitescrollModule
  ],
  providers: [
    //UTILS_STORAGE_PROVIDERS,
    ARTICLE_STORAGE_PROVIDERS,
  ],
  declarations: [],
  exports: [
    LoadingModule
  ]
})
export class CoreModule { }

