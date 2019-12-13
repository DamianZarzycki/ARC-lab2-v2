import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TvsService } from 'src/app/services/tvs.service';

@Component({
  selector: 'app-tv-form',
  templateUrl: './tv-form.component.html',
  styleUrls: ['./tv-form.component.css']
})
export class TvFormComponent implements OnInit {


  reactiveForm: FormGroup;
  brand;
  contrast;
  format;
  resolution;
  type;

  constructor(private fb: FormBuilder,
    private tvsService: TvsService) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      brand: ['', [Validators.required]],
      contrast: ['', [Validators.required,]],
      format: ['', [Validators.required,]],
      image: ['', []],
      resolution: ['', [Validators.required,]],
      type: ['', [Validators.required,]],
    });
  }


  onSubmit() {
    this.brand = this.reactiveForm.get('brand').value;
    this.contrast = this.reactiveForm.get('contrast').value;
    this.format = this.reactiveForm.get('format').value;
    //this.image = this.reactiveForm.get('image').value;
    this.resolution = this.reactiveForm.get('resolution').value;
    this.type = this.reactiveForm.get('type').value;

    this.tvsService.addTV(
      this.brand,
      this.contrast,
      this.format,
      this.resolution,
      this.type,
    )

    window.location.reload();
  }


}
