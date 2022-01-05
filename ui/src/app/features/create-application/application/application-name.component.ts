/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateApplicationFacade } from '../create-application.facade';

@Component({
  selector: 'application-name',
  templateUrl: './application-name.component.html',
  styleUrls: ['../shared-styles.component.scss'],
})
export class ApplicationNameComponent implements OnInit {
  application: FormGroup;
  @Output() applicationName = new EventEmitter<{ applicationName: string }>();

  constructor(private fb: FormBuilder, private appFacade: CreateApplicationFacade) {}

  ngOnInit() {
    this.application = this.fb.group({
      applicationName: ['', Validators.required],
    });
  }

  onNext() {
    this.appFacade.createApplication(this.application.value.applicationName);
    this.applicationName.emit(this.application.value.applicationName);
  }
}
