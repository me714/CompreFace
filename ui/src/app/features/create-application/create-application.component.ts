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
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceTypes } from 'src/app/data/enums/service-types.enum';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss'],
})
export class CreateApplicationComponent {
  application: FormGroup;
  service: FormGroup;
  isEditable: boolean = false;

  serviceTypes = [ServiceTypes.Recognition, ServiceTypes.Detection, ServiceTypes.Verification];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.application = this.fb.group({
      applicationName: ['', Validators.required],
    });

    this.service = this.fb.group({
      serviceName: ['', Validators.required],
      serviceType: [ServiceTypes.Recognition, Validators.required],
    });
  }

  onSave() {
    console.log(this.application.value);
    console.log(this.service.value);
  }
}
