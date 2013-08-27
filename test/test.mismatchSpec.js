define(['chai', '../js/src/mismatch.js'], function (chai, a) {
	var assert = chai.assert;
	var should = chai.should();
	var expect = chai.expect;
	describe('mismatch graph tests', function () {
		it('should create a new graph', function () {
			var aJSON = {"__CLASS__":"npg_qc::autoqc::results::sequence_error-16882","forward_aligned_read_count":9987,"forward_cigar_char_count_by_cycle":{"D":[0,0,0,1,0,1,0,0,0,3,0,0,3,0,0,0,0,3,0,0,0,1,1,1,0,0,2,1,0,2,1,0,1,0,0,0,1,2,2,0,1,1,2,2,0,2,0,3,4,2,0,2,0,0,0,1,1,1,2,0,2,0,1,1,1,1,0,1,0,0,1,0,0,0,0],"H":null,"I":[0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,0,0,1,0,1,1,1,3,0,2,1,1,0,2,0,1,2,1,1,2,3,2,2,1,1,1,2,0,0,0,0,0,2,1,1,2,2,2,1,0,0,1,1,3,3,2,2,2,1,0,0,1,0,3,0,0,1,1,1,0],"M":[9987,9987,9987,9986,9987,9986,9987,9987,9987,9984,9987,9987,9983,9985,9986,9987,9987,9983,9987,9986,9986,9985,9983,9986,9985,9986,9984,9986,9985,9985,9985,9985,9985,9986,9985,9984,9984,9983,9984,9986,9985,9984,9985,9985,9987,9985,9987,9982,9982,9984,9985,9983,9985,9986,9987,9986,9985,9985,9982,9984,9983,9985,9984,9985,9986,9986,9986,9986,9984,9987,9986,9986,9986,9986,9987],"N":null,"P":null,"S":null},"forward_common_cigars":[["75M",9898],["47M1D28M",3],["22M1I52M",3],["9M1D66M",2],["28M1I46M",2]],"forward_count":[9987,9987,9987,9987,9987,9987,9987,9987,9987,9987,9987,9987,9986,9985,9986,9987,9987,9986,9987,9986,9986,9986,9984,9987,9985,9986,9986,9987,9985,9987,9986,9985,9986,9986,9985,9984,9985,9985,9986,9986,9986,9985,9987,9987,9987,9987,9987,9985,9986,9986,9985,9985,9985,9986,9987,9987,9986,9986,9984,9984,9985,9985,9985,9986,9987,9987,9986,9987,9984,9987,9987,9986,9986,9986,9987],"forward_errors":[25,13,28,18,34,14,7,10,19,12,17,14,14,16,13,14,9,17,18,19,6,20,14,15,17,11,13,12,13,23,16,20,18,26,13,12,26,20,17,20,19,19,19,22,17,14,21,21,21,23,25,27,36,23,19,27,21,28,29,32,25,30,26,25,28,39,39,29,30,40,36,41,42,49,50],"forward_n_count":[7,0,4,2,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],"forward_quality_bins":[[16,12,21,15,19,13,6,9,14,11,11,14,12,13,12,13,9,11,15,18,4,15,12,11,15,8,11,9,11,18,8,14,13,18,10,8,18,15,13,11,15,11,10,15,10,9,13,9,9,13,13,12,15,11,6,18,14,10,18,16,14,12,9,6,19,22,22,15,15,17,18,22,14,26,23],[2,1,2,1,1,0,1,0,2,1,2,0,2,3,1,1,0,5,0,0,1,4,1,0,1,0,2,0,1,3,6,6,4,2,2,1,3,2,1,0,3,4,5,2,1,1,1,5,9,8,10,1,1,2,0,4,6,5,5,5,4,5,3,4,4,0,3,3,8,4,5,3,2,6,4],[0,0,1,0,13,1,0,1,3,0,1,0,0,0,0,0,0,1,3,1,1,1,1,4,1,3,0,3,1,2,2,0,1,6,1,3,5,3,3,9,1,4,4,5,6,4,7,7,3,2,2,14,20,10,13,5,1,13,6,11,7,13,14,15,5,17,14,11,7,19,13,16,26,17,17]],"id_run":"demo","info":{"Aligner":"/software/solexa/bin/aligners/bwa/bwa-0.5.10-mt/bwa","Aligner_options":"-n 60","Aligner_version":"0.5.10-tpx","Check":"npg_qc::autoqc::checks::sequence_error","Check_version":"16882"},"pass":"1","position":"1","quality_bin_values":["31","30","15"],"reference":"/lustre/scratch109/srpipe/references/Homo_sapiens/1000Genomes_hs37d5/all/bwa/hs37d5.fa","reverse_aligned_read_count":9940,"reverse_cigar_char_count_by_cycle":{"D":[0,1,0,0,0,2,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,2,0,1,0,1,2,0,1,1,0,2,1,0,2,1,1,1,1,1,0,3,2,1,1,0,2,2,1,2,1,0,1,1,0,0,2,0,0,1,1,3,1,0,0,1,1,0,0,0,0,0,0,0],"H":null,"I":[0,0,0,0,0,0,0,0,0,0,0,1,2,0,1,0,0,0,0,1,0,2,2,1,1,1,2,1,2,1,1,4,5,2,0,0,0,1,3,2,0,0,0,1,2,5,3,2,2,1,3,2,2,1,1,3,4,2,3,3,1,1,4,2,2,1,3,2,4,2,1,1,0,0,0],"M":[9940,9939,9940,9940,9940,9938,9940,9940,9940,9939,9940,9938,9937,9939,9938,9940,9939,9940,9939,9939,9940,9937,9936,9939,9938,9939,9937,9937,9938,9938,9938,9936,9933,9937,9940,9938,9939,9938,9936,9937,9939,9940,9937,9937,9937,9934,9937,9936,9936,9938,9935,9937,9938,9938,9938,9937,9936,9936,9937,9937,9938,9938,9933,9936,9937,9938,9935,9936,9935,9937,9938,9938,9938,9938,9938],"N":null,"P":null,"S":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2]},"reverse_common_cigars":[["75M",9857],["31M2I42M",2],["21M1I53M",2],["47M2D28M",2],["32M1I42M",2]],"reverse_count":[9940,9940,9940,9940,9940,9940,9940,9940,9940,9940,9940,9939,9938,9940,9939,9940,9940,9940,9940,9939,9940,9938,9938,9939,9939,9939,9938,9939,9938,9939,9939,9936,9935,9938,9940,9940,9940,9939,9937,9938,9940,9940,9940,9939,9938,9935,9937,9938,9938,9939,9937,9938,9938,9939,9939,9937,9936,9938,9937,9937,9939,9939,9936,9938,9938,9939,9937,9938,9936,9938,9939,9939,9940,9940,9940],"reverse_errors":[43,29,21,19,16,17,25,30,17,16,18,17,17,23,22,15,13,14,18,16,24,20,22,18,21,18,27,18,21,23,18,25,26,26,28,23,28,20,24,16,40,21,28,21,31,26,35,23,35,28,32,41,46,41,32,34,38,42,37,35,32,40,32,33,82,35,45,51,43,47,53,57,45,60,76],"reverse_n_count":[16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17],"reverse_quality_bins":[[0,22,10,15,14,12,18,17,12,10,11,15,10,10,9,7,7,10,11,8,13,12,10,15,13,10,12,10,11,16,8,10,11,11,14,11,12,8,12,9,11,13,10,7,13,14,14,8,14,13,10,13,18,15,12,11,10,12,13,10,11,16,11,10,13,12,14,19,11,17,19,19,23,25,22],[23,4,2,2,0,2,4,4,2,0,4,1,2,5,1,4,0,3,3,3,4,1,1,1,1,2,3,4,6,1,3,5,4,6,6,0,6,4,1,0,9,1,3,4,8,2,6,1,4,3,5,14,8,7,4,11,9,6,6,9,8,7,6,6,15,4,11,8,7,8,9,12,9,11,23],[4,3,9,2,2,3,3,9,3,6,3,1,5,8,12,4,6,1,4,5,7,7,11,2,7,6,12,4,4,6,7,10,11,9,8,12,10,8,11,7,20,7,15,10,10,10,15,14,17,12,17,14,20,19,16,12,19,24,18,16,13,17,15,17,54,19,20,24,25,22,25,26,13,24,14]],"sample_size":10000,"tag_index":"13"};
			expect(a(aJSON)).to.be.an('object');
		});
		it('should not create a new graph and return null', function () {
			expect(a('1.bc')).to.be.null;
		});
		it('should not create a new graph and return null', function () {
			expect(a(12 + 394 / 45)).to.be.null;
		});
		it('should not create a new graph and return null', function () {
			expect(a('12 + 394 / 45')).to.be.null;
		});
	});
});